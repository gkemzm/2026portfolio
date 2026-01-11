import classes from "./profileBox.module.scss";
interface ProfileBoxType {
  title: string;
  content: string[];
}
const ProfileBox = ({ title, content }: ProfileBoxType) => {
  return (
    <div className={classes.wrapper}>
      <p className={classes.title}>{title}</p>
      {content.map((c) => {
        return (
          <p className={classes.content} key={c}>
            {c}
          </p>
        );
      })}
    </div>
  );
};

export default ProfileBox;
