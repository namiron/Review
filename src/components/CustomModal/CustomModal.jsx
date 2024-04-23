import React from 'react';
import cm from './../modules/CustomModal.module.scss'
import CreateComments from '../comments/CreateComments';
import { IoCloseSharp } from "react-icons/io5";

const CustomModal = ({ isOpen, onClose, handleText, text, userName, setUserName, handleComment, addComment }) => {


	return (
		<>
			{
				isOpen && (
					<div className={cm.modal} >
						<div className={cm.modalWrapper}>
							<div className={cm.modalContent}>
								<button className={cm.modalCloseBtn} onClick={() => onClose()}><IoCloseSharp /></button>
								<CreateComments handleText={handleText}
									text={text}
									userName={userName}
									setUserName={setUserName}
									handleComment={handleComment}
									addComment={addComment}
								/>

							</div>
						</div>
					</div>
				)}

		</>

	)
}
export default CustomModal;
