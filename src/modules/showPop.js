import displayShows from './displayShow.js';
import { addMovieComment, fetchComment } from './commentsApi.js';

const showModal = document.querySelector('#modal-section');
// PopUp method
const popModal = document.createElement('div');
popModal.setAttribute('class', 'modal');
const commentsPopUp = async (data) => {
  document.body.addEventListener('click', (event) => {
    if (event.target.className === 'comment-btn') {
      const commentId = event.target.parentNode.querySelector('button').id;
      data.forEach((show) => {
        const showId = show.id;
        if (showId.toString() === commentId.toString()) {
          popModal.innerHTML = `<div class="modal-content">
  <span class="d-flex jc-flex-end"><i class="fas fa-window-close" aria-hidden="true"></i></span>
  <div class="d-flex flex-d-c">
      <div class="row">
      <img src=${(show.image.medium)} alt="show image" class="popup-img show col-sm-12 mb-3">
      </div>
      <h2 class="d-flex center">${show.name}</h2>
      <div class="d-flex flex-d-c">
      <h3 class="d-flex">Premiered On: ${show.premiered}</h3>
      <p class="d-flex show-desc">${show.summary}</p>
      <h4 class="d-flex mt-1">Language: ${show.language}</h4>
      </div>
      <h3 class="d-flex center"><i class="fa fa-fw fa-comment mb-5"></i>  Comments(0)</h3>

      <div class="flex-d-c mb-5 ">
      <ul class="d-flex s-around comment-list-header font-w-bold">
      <li>Posted </li> <li>By</li> <li> Comment</li>
      </ul>
      <div class="comments-list-body">
      </div>
      </div>
      <form class="card bg-light mb-5" id="comment-form" method="POST">
       <div class="d-flex flex-d-c  card-body">
       <h3 class="center text-success">Add comment</h3><br>
       <input type="text" id="viewer-name" class="form-control" placeholder="Enter your name" required><br>
       <textarea id="viewer-comment" class="form-control"  rows="4" cols="40" placeholder="Enter Comment" max-length="20"  required></textarea><br>
       <button type="submit" id="${show.id}" class="btn btn-success btn-md commentBtn">Comment</button>
       </div>
      </form>
  </div>
</div>`;
        }
      });
      showModal.appendChild(popModal);
      showModal.style.display = ('block');
      const closeBtn = document.querySelector('.fa-window-close');
      document.addEventListener('click', (event) => {
        if (event.target === closeBtn) {
          showModal.style.display = 'none';
          window.location.reload();
        }
      });
      // Submit viewer info
      const viewerUserName = document.querySelector('#viewer-name');
      const viewerComment = document.querySelector('#viewer-comment');
      const submitViewerInfo = () => {
        const comment = {
          username: viewerUserName.value,
          comment: viewerComment.value,
          item_id: commentId,
        };

        addMovieComment(comment);
      };

      const commentSection = document.querySelector('.comments-list-body');
      const commentList = document.createElement('ul');
      commentList.setAttribute('class', 'd-flex flex-d-c');
      // UPDATE COMMENTS
      const updateComments = () => {
        const date = new Date();
        const day = date.getDay();
        const month = date.getMonth();
        const year = date.getFullYear();
        commentList.innerHTML += `<li class="d-flex s-around vierwerCommentList"> 
          <span>${year} ${-month} ${-day}</span>  <span>${viewerUserName.value}</span>  <span>${viewerComment.value}</span></li>
          `;
        commentSection.appendChild(commentList);
      };
      // Show Comments
      const displayComment = async (commentId) => {
        const allComments = await fetchComment(commentId);
        try {
          allComments.forEach((data) => {
            commentList.innerHTML += `<li class="d-flex s-around vierwerCommentList"> 
          <span>${data.creation_date}</span>  <span>${data.username}</span>  <span>${data.comment}</span></li>
          `;
            commentSection.appendChild(commentList);
          });
        } catch (err) {
          commentList.innerHTML += `<li class="d-flex s-around vierwerCommentList">${err.dara}</li>
          `;
          commentSection.appendChild(commentList);
        }
      };

      displayComment(commentId);

      const commentsBtn = document.querySelector('.commentBtn');
      // listen to users enevent
      commentsBtn.addEventListener('click', (e) => {
        e.preventDefault();
        submitViewerInfo();
        updateComments();
        viewerUserName.value = '';
        viewerComment.value = '';
      });
    }
  });

  await displayShows();
};

export default commentsPopUp;