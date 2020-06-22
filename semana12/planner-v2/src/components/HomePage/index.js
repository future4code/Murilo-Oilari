import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const PlannerContent = styled.section`
    
`

const MainContent = styled.section`
    height: 100%;
    width: 100%;
    display: flex;
`

const DayOfTheWeek = styled.div`
    width: 14.2%;
    flex-basis: auto;
    border: 1px solid black;
`

const Task = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Button = styled.button`
    height: 20%;
`

const HomePage = () => {

    const baseUrl = 'https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-julian-murilo-oliari';
    
    const [task, setTask] = useState([]);
    const [body, setBody] = useState(true);
    const [inputValue, setInputValue] = useState('');
    const [selectValue, setSelectValue] = useState('');

    const onChangeInput = e => {
        setInputValue(e.target.value);
    };

    const onChangeSelect = e => {
        setSelectValue(e.target.value);
    };

    useEffect(() => {
        axios.get(baseUrl, {
        }).then((response) => {
            console.log(response.data);
            setTask(response.data)
        }).catch((error) => {
            console.log(error);
        });
    }, [baseUrl, body]);

    const createTask = () =>{
        axios.post(baseUrl, {
            text: inputValue,
            day: selectValue
        }, {
            headers: {
                aluno: 'planner-julian-murilo-oliari'
            }
        }).then((response) => {
            console.log(response.data);
            setInputValue('');
            setBody(!body);
        }).catch((error) => {
            console.log(error);
        });
    };
    
    const editTask = (taskId) => {
        axios.put(`${baseUrl}/${taskId}`, {
            text: inputValue,
            day: selectValue
        }, {
            headers: {
                aluno: 'planner-julian-murilo-oliari',
                taskId: taskId
            }
        }).then((response) => {
            console.log(response.data);
            setInputValue('');
            setBody(!body);
        }).catch((error) => {
            console.log(error);
        });
    };

    const deleteTask = (taskId) => {
        axios.delete(`${baseUrl}/${taskId}`, {
            headers: {
                aluno: 'planner-julian-murilo-oliari',
                taskId: taskId
            }
        }).then((response) => {
            console.log(response.data);
            setBody(!body);
        }).catch((error) => {
            console.log(error);
        });
    };

    const filterByDay = (dayOfTheWeek) => {
        const dayTask = task.map(el => {
            if(el.day === dayOfTheWeek) {
                return (
                    <Task key={el.id}>
                        <p>{el.text}</p>
                        <div>
                            <Button onClick={() => editTask(el.id)}>edit</Button>
                            <Button onClick={() => deleteTask(el.id)}>del</Button>
                        </div>
                    </Task>
                )
            }
        });
        return dayTask;
    };

    return (
        <PlannerContent>
            <input
                value={inputValue}
                type='text'
                name='text'
                placeholder='Nova task'
                onChange={onChangeInput}
            />
            <div>

            <label htmlFor={'daysOfTheWeek'}>Selecione o dia</label>
            <select
                id={'daysOfTheWeek'}
                type='text'
                name='day'
                onChange={onChangeSelect}
                data-testid="select"
                required 
                >
                <option value='domingo'>Domingo</option>
                <option value='segunda'>Segunda</option>
                <option value='terca'>Terça</option>
                <option value='quarta'>Quarta</option>
                <option value='quinta'>Quinta</option>
                <option value='sexta'>Sexta</option>
                <option value='sabado'>Sábado</option>
            </select>
            </div>
            <button onClick={createTask}>Adicionar</button>
            <MainContent>
                <DayOfTheWeek>
                    [Domingo]
                    {filterByDay('domingo')}
                </DayOfTheWeek>
                <DayOfTheWeek>
                    [Segunda]
                    {filterByDay('segunda')}
                </DayOfTheWeek>
                <DayOfTheWeek>
                    [Terça]
                    {filterByDay('terca')}
                </DayOfTheWeek>
                <DayOfTheWeek>
                    [Quarta]
                    {filterByDay('quarta')}
                </DayOfTheWeek>
                <DayOfTheWeek>
                    [Quinta]
                    {filterByDay('quinta')}
                </DayOfTheWeek>
                <DayOfTheWeek>
                    [Sexta]
                    {filterByDay('sexta')}
                </DayOfTheWeek>
                <DayOfTheWeek>
                    [Sábado]
                    {filterByDay('sabado')}
                </DayOfTheWeek>
            </MainContent>
        </PlannerContent>
    );
};

export default HomePage;