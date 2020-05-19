import React from 'react';
import './App.css';
import TestComponent from './TestComponent';  
import Modal from '../components/Modal';

class App extends React.PureComponent {    

  state = {
     isOpen: false
  }

  onModal(){
     this.setState({ isOpen: true });
  }

  render() { 
    return (
      <div className="App">
       <header className="header" > 我是头部 </header>
       <section className="content" > 
          我是内容区 
          <Modal 
           onClose = { e=> this.setState({ isOpen: false })  }
           isOpen = { this.state.isOpen }>
              <div 
                onClick={e=>{
                  e.stopPropagation();  
                  e.nativeEvent.stopImmediatePropagation();  
                }} 
                className="modalchild"> 我是一个小弹窗 </div>
           </Modal>
          <button onClick={ this.onModal.bind(this) }> 点击 </button>
          <TestComponent />
       </section>
       <footer className="footer" > 我是底部 </footer>
      </div>
    );
  }
}

export default App;

