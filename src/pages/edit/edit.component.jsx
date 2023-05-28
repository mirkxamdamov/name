import { HandelEdit } from "../../components/edit";
import { HomeNav } from "../../components/home/nav";

export const EditPage = () => {
    return (
      <div className="d-flex h-100 bg-light">
        <HomeNav className="h-100" />
        <HandelEdit/>
      </div>
    );
} 