const postId = document.querySelector('input[name="post-id"]').value;
console.log("testing");
console.log(postId);

const editFormHandler = async (event) => {
    event.preventDefault();

    const postTitle = document.querySelector('input[name="post-title"]').value;
    const postContent = document.querySelector('textarea[name="post-body"]').value;

    console.log(postTitle);
    console.log(postContent);

    const response = await fetch(`/api/post/${postId}`, {
        method: 'PUT',
        body: JSON.stringify({
            postTitle,
            postContent,
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    console.log(response);
    if (response.ok) {
        document.location.replace('/collection');
    } else {
        alert('Failed to update your post');
    }
    document.location.replace('/collection');
};

const deleteClickHandler = async () => {
    await fetch(`/api/post/${postId}`, {
        method: 'DELETE'
    });

    document.location.replace('/collection');
};

document
    .querySelector('#edit-post-form')
    .addEventListener('submit', editFormHandler);
document
    .querySelector('#delete-btn')
    .addEventListener('click', deleteClickHandler);
