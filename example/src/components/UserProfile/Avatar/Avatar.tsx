import classes from './Avatar.module.scss';
import avatar from './images/student-svgrepo-com.svg?url';

export default function UserProfileAvatar() {
  return (
    <>
      <div className={classes.link}>There will be an avatar soon</div>
      <img src={avatar} alt="Avatar" />
    </>
  );
}
