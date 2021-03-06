import React from 'react';
import { Form, Input, Button } from 'antd';

const FormItem = Form.Item

class CustomForm extends React.Component {
  
    
  
    render() {
      return (
        <div>
          <Form>
            <FormItem label="Title">
              <Input name="title" placeholder="Put a title here" />
            </FormItem>
            <FormItem label="Content">
              <Input name="content" placeholder="Enter some content ..." />
            </FormItem>
            <FormItem>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </FormItem>
          </Form>
        </div>
      );
    }
  }
  

  export default CustomForm