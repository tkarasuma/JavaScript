import React from 'react';
import { connect } from 'react-redux';
import { ActionCreators as UndoActionCreators, ActionCreators } from 'redux-undo';

let UndoRedo = ({ canUndo, canRedo, onUndo, onRedo }) => (
    <div className="mb-1">
        <button className="btn btn-info mr-3" onClick={onUndo} disabled={!canUndo}>元に戻す</button>
        <button className="btn btn-info" onClick={onRedo} disabled={!canRedo}>やり直す</button>
    </div>
)

const mapStateToProps = (state) => {
    return {
        canUndo: state.todos.past.length > 0,
        canRedo: state.todos.future.length > 0
    }
}

const mapDispatchToProps = {
    onUndo: UndoActionCreators.undo,
    onRedo: UndoActionCreators.redo
}

UndoRedo = connect(mapStateToProps, mapDispatchToProps)(UndoRedo);

export default UndoRedo;