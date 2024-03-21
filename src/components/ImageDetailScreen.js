// Import necessary libraries for form handling and validation
import React, {useState} from 'react';
import {View, TextInput, Button, Alert} from 'react-native';

const ImageDetailScreen = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = async () => {
    // Validate form fields
    if (!firstName || !lastName || !email || !phone) {
      Alert.alert('Validation Error', 'All fields are required');
      return;
    }
    // Submit data to server
    try {
      const response = await fetch('http://dev3.xicom.us/xttest/savedata.php', {
        method: 'POST',
        body: JSON.stringify({
          first_name: firstName,
          last_name: lastName,
          email,
          phone,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      // Handle success response
      // Show success message or navigate to a different screen
    } catch (error) {
      console.error('Error submitting data:', error);
      Alert.alert('Error', 'Failed to submit data. Please try again later.');
    }
  };

  return (
    <View>
      <TextInput
        placeholder="First Name"
        value={firstName}
        onChangeText={setFirstName}
      />
      <TextInput
        placeholder="Last Name"
        value={lastName}
        onChangeText={setLastName}
      />
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput
        placeholder="Phone Number"
        value={phone}
        onChangeText={setPhone}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

export default ImageDetailScreen;
