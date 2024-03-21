const BASE_URL = 'http://dev3.xicom.us/xttest';

export const fetchImages = async (userId, offset, type) => {
  try {
    const response = await fetch(`${BASE_URL}/getdata.php`, {
      method: 'POST',
      body: JSON.stringify({user_id: userId, offset: offset.toString(), type}),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    return data.images;
  } catch (error) {
    console.error('Error fetching images:', error);
    throw error;
  }
};

export const saveUserData = async userData => {
  try {
    const formData = new FormData();
    formData.append('first_name', userData.firstName);
    formData.append('last_name', userData.lastName);
    formData.append('email', userData.email);
    formData.append('phone', userData.phone);
    formData.append('user_image', {
      uri: userData.imageUri,
      type: 'image/jpeg',
      name: 'user_image.jpg',
    });

    const response = await fetch(`${BASE_URL}/savedata.php`, {
      method: 'POST',
      body: formData,
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error saving user data:', error);
    throw error;
  }
};
