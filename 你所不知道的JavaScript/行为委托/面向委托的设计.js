class Task{
  id
  constructor(ID){
    this.id = ID
  }
  outputTask(){
    console.log(this.id)
  }
}

class XZY extends Task {
  label;

  constructor(ID, LABEL){
    super(ID)
    this.label = LABEL
  }
  outputTask() {
    console.log('ok')
    super.outputTask();
    console.log(this.label)
  }
}

const xyz = new XZY('me', 'label')
xyz.outputTask()

Task = {
  setID: function(ID) { this.id = ID; },
  outputID: function() { console.log(this.id); }
};

// 让XYZ委托Task
XYZ = Object.create(Task);

XYZ.prepareTask = function(ID, Label) {
  this.setID(ID);
  this.label = Label;
};

XYZ.outputTaskDetails = function() {
  this.outputID();
  console.log(this.label);
};
