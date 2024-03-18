import React, { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { Todo as TodoValue, selectTodo, addTodo, removeTodo } from "../../reducers/todo"

import {
    Button,
    DatePicker,
    Form,
    Input,
    Layout,
    Breadcrumb,
    Flex,
    Radio
} from 'antd';
import MainLayout from '../../layouts/Main';
import AppRadio from '../../components/RadioGroup';
import type { RadioData } from "../../components/RadioGroup"
import { styles } from "./style"
const { RangePicker } = DatePicker;


const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 14 },
    },
};
const StatusData: RadioData[] = [
    {
        name: "Pending",
        value: "pending"
    },
    {
        name: "Success",
        value: "success"
    },
    {
        name: "Fail",
        value: "fail"
    },
    {
        name: "Open",
        value: "open"
    }
]
const Todo: React.FC = () => {
  
    const [form] = Form.useForm();

    const dispatch = useAppDispatch()
    const listTodo = useAppSelector(selectTodo)

    const [todo, setTodo] = useState<TodoValue>({
        name: "tunglx",
        status: "fail"
    })


    useEffect(() => {
        // form.setFieldsValue({ ...todo })
        console.log({ ...todo })
    }, [])

    useEffect(() => {
        // form.setFieldsValue({ ...todo })
        return () => {
            console.log("Todo Page Unmounted")
        }
    })

    const submitForm = () => {
        const data: TodoValue = form.getFieldsValue()
        const index = listTodo.findIndex(item => item.name === data.name && item.status === data.status)
        if (index > -1) {
            alert("Todo already exist !!!")
            return;
        }

        console.log(data, "myData")
        setTodo(data)
        // console.log(todo)
        dispatch(addTodo(data))
    }

    const deleteTodo = (item: TodoValue) => {
        dispatch(removeTodo(item))
    }

    const determindTodoColor = (status: string) => {
        switch (status) {
            case "success":
                return "alert-success"
            case "open":
                return "alert-primary"
            case "fail":
                return "alert-danger"
            case "pending":
                return "alert-light"
            default:
                return ""
        }
    }

    return (
            <Layout>
                <Flex vertical>
                    <Breadcrumb
                        items={[
                            {
                                title: 'Todo',
                            },
                        ]}
                        style={{ color: "red" }}
                        className="mb-5"
                    />
                    <Form {...formItemLayout} variant="filled" style={styles.TodoForm} form={form} initialValues={{ ...todo }}>
                        <Form.Item label="Name" name="name" rules={[{ required: true, message: 'Please input!' }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item label="Status" name="status" rules={[{ required: true, message: 'Please Select Status!' }]}>
                            {/* <AppRadio data={StatusData} /> */}
                            <Radio.Group>
                                {
                                    StatusData.map((item, _) => {
                                        return <Radio value={item.value}> {item.name} </Radio>
                                    })
                                }

                            </Radio.Group>
                        </Form.Item>
                        <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
                            <Button type="primary" onClick={() => {
                                submitForm()
                            }}>
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                    <div style={{ overflow: "scroll", padding: "30px", maxHeight: "300px" }} className="mt-5">
                        {
                            listTodo.map((item, _) => {
                                return (
                                    <div className={`alert ${determindTodoColor(item.status)}`} role="alert">
                                        {item.name}
                                        <button type="button" onClick={() => {
                                            deleteTodo(item)
                                        }} className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                    </div>
                                )
                            })
                        }

                        {/* <div className="alert alert-secondary" role="alert">
            A simple secondary alert—check it out!
        </div>
        <div className="alert alert-success" role="alert">
            A simple success alert—check it out!
        </div>
        <div className="alert alert-danger" role="alert">
            A simple danger alert—check it out!
        </div>
        <div className="alert alert-warning" role="alert">
            A simple warning alert—check it out!
        </div>
        <div className="alert alert-info" role="alert">
            A simple info alert—check it out!
        </div>
        <div className="alert alert-light" role="alert">
            A simple light alert—check it out!
        </div>
        <div className="alert alert-dark" role="alert">
            A simple dark alert—check it out!
        </div> */}
                    </div>
                </Flex>
            </Layout>
    )
};

export default Todo;