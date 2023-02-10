document.getElementById("btn-post").addEventListener('click',function comment(){
    const commentBox = document.getElementById('new-comment');
    const newComment = commentBox.value;
    const commentContainer = document.getElementById('comment-container');
    const newParagraph = document.createElement('p');
    newParagraph.innerText = newComment;
    commentContainer.appendChild(newParagraph)
    commentBox.value = '';
})