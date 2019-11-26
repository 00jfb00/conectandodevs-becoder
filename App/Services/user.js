import Storage from '../Core/sqlite';

export const isLoggedUser = async () => {
  try {
    return await Storage.getItem('USER_DATA')
      .then(res => {
        if (res.key === 'USER_DATA' && res.storedValue !== undefined) {
          return true;
        }
        return false;
      })
      .catch(err => {
        console.log(err);
        throw err;
      });
  } catch (error) {
    throw error;
  }
};

export const getLoggedUser = async () => {
  try {
    return await Storage.getItem('USER_DATA')
      .then(res => JSON.parse(res.storedValue))
      .catch(err => {
        throw err;
      });
  } catch (error) {
    throw error;
  }
};

export const unsetLoggedUser = async () => {
  try {
    return await Storage.removeItem('USER_DATA')
      .then(res => res)
      .catch(err => {
        console.log(err);
        throw err;
      });
  } catch (error) {
    throw error;
  }
};

export const setLoggedUser = async obj => {
  try {
    return await Storage.setItem('USER_DATA', JSON.stringify(obj), err => {
      throw err;
    })
      .then(() => obj)
      .catch(err => {
        console.log(err);
        throw err;
      });
  } catch (error) {
    throw error;
  }
};

export const _login = async obj => {
  return new Promise((resolve, reject) => {
    resolve({status: 200, data: {name: 'Teste da Silva'}});
  });
};

export const _getUserData = async token => {
  return new Promise((resolve, reject) => {
    resolve({status: 200, data: {name: 'Teste da Silva'}});
  });
};
