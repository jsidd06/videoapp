import AuthRoutes from "./auth";
import LikesRoutes from "./likes";
import uploadRoutes from "./upload";
import userRoutes from "./user";

const Routes = [...AuthRoutes,...uploadRoutes,...LikesRoutes,...userRoutes];

export default Routes;
