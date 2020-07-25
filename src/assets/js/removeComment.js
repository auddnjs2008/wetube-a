import axios from "axios";

const delBtn = document.querySelectorAll("#deleteComment");
const comments = document.getElementById("jsCommentList");
const commentNumber = document.getElementById("jsCommentNumber");

const removeComment = (comment) => {
  comments.removeChild(comment);
  commentNumber.innerHTML = parseInt(commentNumber.innerHTML, 10) - 1;
};

const sendDelComment = async (comment) => {
  const val = comment.value;
  const ul = comment.parentNode;
  const response = await axios({
    url: `/api/${val}/comment/del`,
    method: "POST",
    data: {
      val,
    },
  });
  if (response.status === 200) {
    removeComment(ul);
  }
};

const handleDelClick = (event) => {
  const purpose = event.target;
  sendDelComment(purpose);
};

function init() {
  delBtn.forEach(function (i) {
    i.addEventListener("click", handleDelClick);
  });
}

init();
