import SQLite from 'react-native-sqlite-2';
const db = SQLite.openDatabase('Storage.db', '2.0', '', 1);

const setItem = async (key, storedValue) => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS Storage (key PRIMARY KEY, storedValue)',
        [],
        () => {},
        error => reject(error),
      );
      tx.executeSql(
        'INSERT OR REPLACE INTO Storage VALUES (?, ?)',
        [key, storedValue],
        (ts, rs) => {
          if (rs.insertId) {
            resolve(true);
          } else {
            reject(new Error('Unable to set storedValue'));
          }
        },
        error => reject(error),
      );
    });
  });
};

const getItem = async key => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS Storage (key PRIMARY KEY, storedValue)',
        [],
        () => {},
        error => reject(error),
      );
      tx.executeSql(
        'SELECT * FROM Storage WHERE key = ?',
        [key],
        (ts, rs) => {
          if (rs.rows.length > 0) {
            resolve(rs.rows.item(0));
          } else {
            resolve('');
          }
        },
        error => reject(error),
      );
    });
  });
};

const removeItem = async key => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS Storage (key PRIMARY KEY, storedValue)',
        [],
        () => {},
        error => reject(error),
      );
      tx.executeSql(
        'DELETE FROM Storage WHERE key = ?',
        [key],
        () => resolve(true),
        error => reject(error),
      );
    });
  });
};

module.exports = {
  setItem,
  getItem,
  removeItem,
};
