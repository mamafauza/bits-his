import React, { Component } from 'react';
 import { Form,FormGroup,Label,Input,Table,Button } from 'reactstrap';


class Staff extends Component {
  state = {
    Payment:"",
    cash:"",
    bank:"",
    amount:""
  };
 
  render() {
    return (
      <Form>
      <div>
        <center>
          <h1>STAFF PAYMENT</h1>
        </center>
         <Button>Payment</Button><br></br> 
 <FormGroup row>
   <div className="col-md-6 col-lg-6">
        <FormGroup>
          <label>payment</label>
          <Input type="text" />
          </FormGroup>
    </div>

    <div className="col-md-6 col-lg-6">
          <FormGroup>
          <label>cash</label>
          <Input type="text" />
          </FormGroup>
     </div>

      <div className="col-md-6 col-lg-6">
          <FormGroup>
          <label>Bank</label>
          <Input type="text" />
          </FormGroup>
      </div>

      <div className="col-md-6 col-lg-6">
          <FormGroup>
          <label>Amount</label>
          <Input type="number" 
          />
          </FormGroup>
      </div>
  </FormGroup>
          
        <Table striped bordered hover responsive>
          <thead>
    
            <tr>
              <th>S/N</th>
              <th>NAME</th>
              <th>AMOUNT EARNED</th>
              <th>BANK DETAILS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Fahad Ado</td>
              <td>100,000</td>
              <td>GTB</td>
            </tr>
            <tr>
              <td>2</td>
              <td>shamsudeen muhd</td>
              <td>5000</td>
              <td>ACESS BANK</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Amina Ado</td>
              <td>300,000</td>
              <td>FCMB</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Abba umar</td>
              <td>400,000</td>
              <td>DIAMOND BANK</td>
            </tr>
          </tbody>
        </Table> 
      </div>
      </Form>
    );
  }
}

export default Staff;
