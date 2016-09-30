var  ActionPay = React.createClass({
    step: 4,
    action: "pay",
    done: function(todoId) {
        let noteKey = this.action + "Note";
        let noteText = document.getElementById("note").value;
        updateTodo(todoId, noteKey, noteText)
        updateTodo(todoId, this.action, true);
        window.location = "/#/congratulation/"+todoId;
    },

    later: function(todoId) {
        updateTodo(todoId, this.action, false);
        window.location = "/#/start/"+todoId;
    },

    next: function(todoId) {
        let noteKey = this.action + "Note";
        let noteText = document.getElementById("note").value;
        updateTodo(todoId, noteKey, noteText)
        window.location = "/#/congratulation/"+todoId;
    },

    prev: function(todoId) {
        goToPrevStep(this.step, todoId);
    },

  render: function() {
    let todoId = this.props.params.todoId;
    let todo = getTodoObject(todoId);
    let note = getStepNote(todoId, this.action);

    if (todoId !== undefined) {
        var currentTodo = getTodoObject(todoId);
        var property = listings[currentTodo.listingId];
    }    

    return (
      <div className="action-pay" id="actionpay">

        <HeaderCall 
            icon="fa-credit-card" 
            text="Pay the collateral"
            description="Always make sure you have the receipt when doing a payment. Just like apples, not all agents can be trusted."
            todoId={todoId}
        ></HeaderCall>

        <AgentInfo property={property} />
        <ActionNote note={note}></ActionNote>

        <ButtonControl
            done={todo[this.action]}
            onLater= {this.later}
            onDone={this.done}
            onNext={this.next}
            onPrev={this.prev}
            todoId={todoId}
        ></ButtonControl>
        </div>
    );
  }
});