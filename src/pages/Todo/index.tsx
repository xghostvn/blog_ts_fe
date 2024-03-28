import React, { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { selectTodo, fetchTodo, setListTodo, createTodo } from "../../reducers/todo"
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import moment from 'moment';
import _ from "lodash"
import {
    Button,
    Form,
    Input,
    Layout,
    Breadcrumb,
    Flex,
    Radio,
    DatePicker
} from 'antd';
import type { RadioData } from "../../components/RadioGroup"
import { styles } from "./style"
import { NotificationSuccess } from '../../Utils';

const { TextArea } = Input;
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
        name: "Open",
        value: 0
    },
    {
        name: "Done",
        value: 1
    },
    {
        name: "Fail",
        value: 2
    }
]
const Todo: React.FC = () => {
    const [form] = Form.useForm();
    const dispatch = useAppDispatch()
    const queryClient = useQueryClient()
    const listTodo = useAppSelector(selectTodo)
    const { data, isError, isSuccess } = useQuery({ queryKey: ["todos"], queryFn: fetchTodo })
    const mutation = useMutation({
        mutationFn : createTodo,
        onSuccess : (data) => {
            NotificationSuccess(data.message)
            queryClient.invalidateQueries({queryKey : ["todos"]})
            form.resetFields()
        }
    })
    console.log(isSuccess, "outside effect")
    useEffect(() => {
        console.log(data, "Data")
        if(isSuccess) {
            dispatch(setListTodo(data.data))
        } else {
            console.log("hahah")
        }
        console.log("inside effect")
    }, [isSuccess])
  
    const submitForm = (values : any) => {
        const data : Omit<Todo, "created_by" | "id"> = values
     
        mutation.mutate({
            name : data.name,
            status : data.status,
            end_time : moment(data.end_time).format("YYYY/MM/DD HH:mm"),
            start_time : moment(data.start_time).format("YYYY/MM/DD HH:mm")
        })
    }
    const deleteTodo = (item: Todo) => {
    }
    const determindTodoColor = (status: number) => {
        switch (status) {
            case 1:
                return "alert-success"
            case 0:
                return "alert-primary"
            case 2:
                return "alert-danger"
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
                <Form {...formItemLayout} variant="filled" style={styles.TodoForm} form={form} onFinish={submitForm}>
                    <Form.Item label="Name" name="name" rules={[{ required: true, message: 'Please input!' }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item label="Status" name="status" rules={[{ required: true, message: 'Please Select Status!' }]}>
                        {/* <AppRadio data={StatusData} /> */}
                        <Radio.Group>
                            {
                                StatusData.map((item, key) => {
                                    return <Radio key={key} value={item.value}> {item.name} </Radio>
                                })
                            }

                        </Radio.Group>
                    </Form.Item>
                    <Form.Item label="Start Time" name="start_time" rules={[
                        {
                            required : true
                        },
                    ]}>
                        <DatePicker
                            format="DD/MM/YYYY hh:mm A"
                            showTime={{ use12Hours: false }}
                        >
                        </DatePicker>
                    </Form.Item>
                    <Form.Item label="End Time" name="end_time" rules={[
                        {
                            required : true
                        }
                    ]}>
                        <DatePicker
                            format="DD/MM/YYYY hh:mm A"
                            showTime={{ use12Hours: false }}
                        >
                        </DatePicker>
                    </Form.Item>
                    <Form.Item label="Note" name="note" style={{height : "6em"}}>
                        <TextArea className='w-100 h-100' autoSize={{ minRows : 4}} />
                    </Form.Item>
                    <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
                        <Button type="primary" htmlType='submit'>
                            Submit
                        </Button>
                    </Form.Item>
                 
                </Form>
                <div style={{ overflow: "scroll", padding: "30px", maxHeight: "300px" }} className="mt-5">
                    {
                       listTodo.map((item : Todo) => {
                            return (
                                <div key={item.id} className={`alert ${determindTodoColor(item.status)}`} role="alert">
                                    {item.name}
                                    <button type="button" onClick={() => {
                                        deleteTodo(item)
                                    }} className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                </div>
                            )
                        })
                    }
                </div>
            </Flex>
        </Layout>
    )
};

export default Todo;