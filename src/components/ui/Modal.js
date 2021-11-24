import React from 'react'

export const Modal = ({
    idModal,
    title, 
    nameAction, 
    description,
    amount,
    onChangeDescription,
    onChangeAmount,
    handleOnClick
}) => {

    return (
        <div className="modal fade" id={idModal} tabIndex="-1" role="dialog" aria-labelledby={idModal} aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id={idModal}>{title}</h5>
                    <button type="button" className="close" data-dismiss={idModal} aria-label="Close">
                        <i className="fa fa-close"></i>
                    </button>
                </div>
                <div className="modal-body">
                    <form>
                        <div className="form-group">
                            <label>Description</label>
                            <input value={description} onChange={onChangeDescription} type="text" className="form-control" placeholder="Enter description" />
                        </div>
                        <div className="form-group">
                            <label>Amount</label>
                            <input min={0} step={0.01} value={amount} onChange={onChangeAmount} type="number" className="form-control" placeholder="Amount" />
                        </div>
                    </form>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss={idModal}>Close</button>
                    <button type="button" className="btn btn-success" onClick={handleOnClick}>
                        <i className="fa fa-save"></i> {nameAction}
                    </button>
                </div>
                </div>
            </div>
        </div>
    )
}
