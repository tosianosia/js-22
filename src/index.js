import validatePassword from './js/validate-password';
import { addUser } from './js/api-service';

import onOpenModal from './js/on-open-modal';

onOpenModal.addEventListener('click', onOpenModal);

addUser('mango');

// console.log(validatePassword('qweqweqeqweqweqweqw'));
// import {
//   fetchAllUsers,
//   fetchUserById,
//   updateUserById,
//   x as value,
//   y as name,
// } from './js/api-service';
// import * as apiService from './js/api-service';

// console.log(validatePassword);
// console.log(validatePassword('qweqweqwe'));

// console.log(fetchAllUsers);
// console.log(fetchUserById);
// console.log(updateUserById);
// console.log(value);
// console.log(name);

// console.log(apiService);
