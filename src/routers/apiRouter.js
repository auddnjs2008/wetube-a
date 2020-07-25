import express from "express";
import routes from "../routes";
import {
  postRegisterView,
  postAddComment,
  DelComment,
} from "../controllers/videoController";

const apiRouter = express.Router();

apiRouter.post(routes.registerView, postRegisterView);
apiRouter.post(routes.addComment, postAddComment);
apiRouter.post(routes.delComment, DelComment);
export default apiRouter;
