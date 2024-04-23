import React, { useState } from 'react';
import reviewStyles from '../modules/reviewStyles.module.scss'
import CustomModal from '../CustomModal/CustomModal';
import cm from './../modules/CustomModal.module.scss'
import StarsRating from '../starsRating/StarsRating';


const CommentsList = ({ rating }) => {
    //---------------------------------
    const [comments, setComments] = useState([]);
    const [text, setText] = useState('');
    const [userName, setUserName] = useState('');
    const [isOpen, setOpen] = useState(false)

    const handleText = (e) => {
        setText(e.target.value);
    }

    const addComment = () => {
        if (text && userName) {
            setComments([
                ...comments,
                {
                    id: new Date().toDateString(),
                    name: userName,
                    text: text,
                    rating: rating,
                }
            ]);
            setText('');
            setUserName('')
        }
    }
    console.log(comments);
    const handleComment = (e) => {
        e.preventDefault();
        addComment();
    }
    //---------------------------------

    return (
        <div className={reviewStyles.wrapper}>
            <div className={reviewStyles.heading}>
                <h2 className={reviewStyles.title}>Write a Review</h2>
                <h3 className={reviewStyles.subTitle}>Share your thoughts with the community.</h3>
            </div>
            <button className={cm.buttonOpen} onClick={() => setOpen(true)}>Write a Review</button>
            <CustomModal
                isOpen={isOpen}
                onClose={() => setOpen(false)}
                handleText={handleText}
                text={text}
                userName={userName}
                setUserName={setUserName}
                handleComment={handleComment}
                addComment={addComment}
            />
            <ul className={reviewStyles.reviewList}>
                {comments.map((comment) => (
                    <li key={comment.id} className={reviewStyles.reviewItem} >
                        <div className={reviewStyles.reviewName}>{comment.name}<span className={reviewStyles.time}>{String(comment.id)}</span> </div>
                        <StarsRating rating={rating} count={5} />
                        {comment.text}
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default CommentsList