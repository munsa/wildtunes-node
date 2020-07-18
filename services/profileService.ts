import {CustomError} from '../utils/error/customError';
import {RecordingService} from './recordingService';
import {UserService} from './userService';

export module ProfileService {
  /**
   * @name    getProfileByUsername
   * @param   username
   * @return  profile
   */
  export const getProfileByUsername = async (username: string) => {
    const user = await UserService.getUserByUsername(username);
    if (user) {
      const recordings = await RecordingService.getUserRecordings(user.id);

      return {
        user: user,
        recordings: recordings
      }
    } else {
      throw new CustomError(CustomError.USER_DOESNT_EXIST)
    }
  }
}