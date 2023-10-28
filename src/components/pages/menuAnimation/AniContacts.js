
import { useState,useEffect } from "react";
import { Transition } from 'react-transition-group';



const Modal = (props) => {
    const duration = 500;

    const defaultStyle = {
        transition: `all ${duration}ms ease-in-out`,
        opacity: 0,
        visibility: 'hidden',
    }

    const transitionStyles = {
        entering: { opacity: 1, visibility: 'visible' },
        entered:  { opacity: 1, visibility: 'visible' },
        exiting:  { opacity: 0, visibility: 'hidden' },
        exited:  { opacity: 0, visibility:'hidden' },
    };



    return (
        <Transition
        timeout={duration}
        in={props.visibleModal}
        
        >
            { state => (
                <div className="contacts-modal"
                name='modal-field'
                style={{
                    ...defaultStyle,
                    ...transitionStyles[state]

                }}
                onClick={() => props.onClose(false)}>
                <div className="contacts-modal__container" name="modal-container" onClick={(e) => e.stopPropagation()}>
                <button className="btn btn-close contacts-modal__btn-close" onClick={() => props.onClose(false)}></button>
                    <div className="contacts-modal__header">
                        <h3>This is a madal window</h3>
                    </div>
                    <div className="contacts-modal__body">
                        <h4>Some text bla bla bla</h4>

                    </div>
                    <div className="contacts-modal__footer">
                        <button className="btn btn-secondary" onClick={() => props.onClose(false)}>save data</button>
                        <button className="btn btn-warning" onClick={() => props.onClose(false)}>close</button>
                    </div>
                </div>
            </div>
            )
            }
        </Transition>
        
    )
}


function AniContacts() {
    const [visibleModal, setVisibleModal] = useState(false)

    useEffect(() => {
        visibleModal ? document.body.style.overflowY = 'hidden': document.body.style.overflowY = 'unset';
       
    }, [visibleModal])




    return(
        <>
        <div className="menu-anim-block__header">
            <h2>Contacts</h2>
        </div>
        <div className="menu-anim-block__body contacts">
            <button
            className="btn btn-primary" 
            onClick={() => setVisibleModal(true)}
            >
                open modal
                </button>
            <Modal onClose={setVisibleModal}
                visibleModal={visibleModal}/>  
            <div className="contacts-many-text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus enim ducimus expedita similique vero aspernatur, autem dolor nihil in voluptates, vel laudantium quod iure praesentium ratione modi, commodi magni reiciendis?
                Officia exercitationem laudantium vero, natus, similique magnam nostrum aliquid facere a sapiente temporibus fuga magni eveniet tenetur laboriosam error aspernatur odit? Sit nobis nesciunt rerum ea. Possimus consectetur expedita beatae?
                Quas, maxime aliquam dolores commodi vel numquam. Quasi provident porro eaque corporis quisquam esse! Quis laboriosam nulla, ad, eligendi est doloribus aliquam eum odit expedita, et rerum deserunt quae corrupti.
                Illo ad deleniti molestiae in sapiente corrupti, odit exercitationem quia ut minus expedita sed ea aspernatur. Doloribus voluptatibus dignissimos, facilis, vitae eius corporis illum quis adipisci exercitationem, pariatur esse sit.
                Omnis, architecto odio. Suscipit nam laborum perspiciatis harum fuga pariatur perferendis voluptate architecto, nostrum fugit repellendus eum iste aperiam minus vel quod. Nisi labore neque modi sapiente. Facere, laboriosam quae?
             ibus labore possimus. Adipisci deleniti, voluptatibus quia, ab eveniet labore quibusdam, voluptas maxime obcaecati nostrum commodi? Omnis accusamus voluptatibus quas aliquid quia temporibus voluptates quos?
                Odit ab doloribus aperiam sed? Hic voluptates pariatur ut voluptatem ab nihil saepe ipsum! Voluptatem minus cumque neque modi ipsam possimus id, ex, nobis velit natus dolorem blanditiis itaque non!
                </div>    
        </div>
    </>
    )
}

export default AniContacts;