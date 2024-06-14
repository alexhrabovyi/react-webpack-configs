import classes from './Description.module.scss';

interface UserProfileDescriptionProps {
  text: string,
}

export default function UserProfileDescription({ text }: UserProfileDescriptionProps) {
  return (
    <p className={classes.fancyText}>{text}</p>
  );
}
