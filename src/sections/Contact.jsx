import React, {useRef, useState} from 'react'
import emailjs from '@emailjs/browser';

const Contact = () => {
    const formRef = useRef()

    const [loading, setLoading] = useState(false)
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    })
    const handleChange = ({target: {value, name}}) => {
        setForm({...form, [name]: value})
    }
    const handleSubmit = async(e) => {
        e.preventDefault()
        setLoading(true)

        try {
            await emailjs.send(
                'service_uqvfs4p',
                'template_zisqecw',
                {
                    from_name: form.name,
                    to_name: 'Jarod',
                    from_email: form.email,
                    to_email: 'ginjarod@gmail.com',
                    message: form.message
                },
                'vCogGbptimYSzvgR2')
            setLoading(false)
            alert('Message envoyé !')
            setForm({
                name: '',
                email: '',
                message: '',
            })
        } catch (error) {
            setLoading(false)
            console.log(error)
            alert('Erreur !')

        }
    }

    return (
        <section className="c-space my-20" id="contact">
            <h3 className="head-text">Me contacter</h3>
            <div className="relative flex items-center justify-center flex-col min-h-screen">
                <img className="absolute inset-0 min-h-screen" src="/assets/terminal.png" alt="terminal"/>
                <div className="contact-container">
                    <h3 className="head-text">Prenez contact</h3>
                    <p className="text-lg text-white-600 mt-3">Si vous êtes à la recherche du développement ou
                        de l'amélioration d'un site web mais aussi d'une application mobile, n'hésitez pas à me
                        contacter.</p>
                    <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">

                        <label className="space-y-3">
                            <span className="field-label">
                                Nom - Prenom
                            </span>
                            <input type="text" name="name" value={form.name} onChange={handleChange} required
                                   placeholder="Votre Nom" className="field-input"/>
                        </label>

                        <label className="space-y-3">
                            <span className="field-label">
                                Email
                            </span>
                            <input type="email" name="email" value={form.email} onChange={handleChange} required
                                   placeholder="exemple@gmail.com" className="field-input"/>
                        </label>

                        <label className="space-y-3">
                            <span className="field-label">
                                Votre Message
                            </span>
                            <textarea name="message" value={form.message} onChange={handleChange} required rows={5}
                                      placeholder="Bonjour, je souhaite vous confier un travail..." className="field-input"/>
                        </label>

                        <button className="field-btn" type="submit" disabled={loading}>
                            {loading ? 'Envoie...' : 'Envoyer'}
                            <img src="/assets/arrow-up.png" alt="arrow_up" className="field-btn_arrow"/>
                        </button>

                    </form>
                </div>

            </div>
        </section>
    )
}
export default Contact
