import React from 'react';
import reviewStyles from '../modules/reviewStyles.module.scss'
import StarsRating from '../starsRating/StarsRating';


const CreateComments = ({ handleText, text = '', userName = '', setUserName, handleComment, addComment, }) => {

    return (
        <form className={reviewStyles.formBlock} onSubmit={handleComment} >
            <div className={reviewStyles.starsRating}>
                <h3 className={reviewStyles.OverallRating}>Overall rating *</h3>
                <StarsRating count={5} />
            </div>
            <div className={reviewStyles.box}>
                <p className={reviewStyles.name}>name</p>
                <div className={reviewStyles.blockInput}>
                    <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} placeholder='name' />
                </div>

            </div>
            <div className={reviewStyles.box}>
                <p className={reviewStyles.text}>review</p>
                <div className={reviewStyles.blockTextarea}>
                    <textarea type="text" value={text} onChange={handleText} placeholder='comment' />
                </div>

            </div>

            <button className={reviewStyles.publish} onClick={addComment} type='submit'>publish </button>
        </form>
    )
}

export default CreateComments;