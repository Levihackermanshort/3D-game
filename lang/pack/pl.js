import {
  ERROR_CODES,
  ROOM_SERVER_MESSAGES_TYPES,
} from '../../network/constants/serverCodes';

export default {
  editor: {
    titles: {
      save: 'Save',
      load: 'Load',
    },
  },
  game: {
    shared: {
      loading: 'Loading...',
    },
    errors: {
      [ERROR_CODES.ROOM_FULL]: 'Room / Server is full!',
      [ERROR_CODES.ROOM_ALREADY_EXISTS]: 'The specified room already exists!',
      [ERROR_CODES.ALREADY_KICKED]: 'Access denied, banned!',
    },
  },
};
