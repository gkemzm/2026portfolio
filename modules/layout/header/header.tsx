import { headerItem } from "./data";
import classes from "./header.module.scss";
const Header = () => {
  return (
    <div className={classes.wrapper}>
      {headerItem.map((item, idx) => {
        const label = item.toUpperCase();
        return (
          <div className={classes.info} key={item}>
            {idx + 1}.&nbsp;{label}
          </div>
        );
      })}
    </div>
  );
};
export default Header;
