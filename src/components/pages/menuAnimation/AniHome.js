
import './aniContact.scss'

import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { useState } from 'react'
import { Container, ListGroup, Button } from 'react-bootstrap'
import { nanoid } from 'nanoid'

const AniHome = () => {
    const [items, setItems] = useState([
        { id: '1', text: 'Eat' },
        { id: '2', text: 'Code' },
        { id: '3', text: 'Sleep' },
        { id: '4', text: 'Repeat' },
      ])

    return(
       <>
            <div className="menu-anim-block__header">
                <h2>Home</h2>
            </div>
                <Container className='mt-4'>
                    <ListGroup className='mb-4' style={{ maxWidth: '480px' }}>
                        <TransitionGroup>
                        {items.map(({ id, text }) => (
                            <CSSTransition key={id} timeout={500} classNames='item'>
                            <ListGroup.Item>
                                <Button
                                style={{ marginRight: '1rem' }}
                                variant='danger'
                                size='sm'
                                onClick={() => {
                                    setItems((items) => items.filter((item) => item.id !== id))
                                }}
                                >
                                &times;
                                </Button>
                                {text}
                            </ListGroup.Item>
                            </CSSTransition>
                        ))}
                        </TransitionGroup>
                    </ListGroup>
                    <Button
                        onClick={() => {
                        const text = prompt('Введите тект задачи')
                        if (text) {
                            setItems((items) => [...items, { id: nanoid(5), text }])
                        }
                        }}
                    >
                        Добавить элемент
                    </Button>
                </Container>
            </>
    )
}

export default AniHome;