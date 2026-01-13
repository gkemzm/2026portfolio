import HomeComponent from "@/modules/components/home/home";
import Header from "@/modules/layout/header/header";
import classes from "./page.module.scss";
import ProfileComponent from "@/modules/components/profile/profile";
import StackComponent from "@/modules/components/stack/stack";
import ProjectComponent from "@/modules/components/project/project";
export default function Home() {
  return (
    <div className={classes.wrapper}>
      <div className={classes.header}>
        <Header />
      </div>

      <div className={classes.itemlayer}>
        <HomeComponent />
      </div>
      <div className={classes.itemlayer}>
        <ProfileComponent />
      </div>
      <div className={classes.itemlayer}>
        <StackComponent />
      </div>
      <div className={classes.itemlayer}>
        <ProjectComponent />
      </div>
    </div>
  );
}
