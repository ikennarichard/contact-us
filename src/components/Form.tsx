import { useForm, type SubmitHandler } from 'react-hook-form';
import '../styles/form.sass';
import { useState } from 'react';

type Inputs = {
	firstname: string;
	lastname: string;
	email: string;
	query: string;
	message: string;
	consent: boolean;
}

export default function ContactForm() {
	const [formSent, setFormSent] = useState(false);
	const {
		register,
		handleSubmit,
		formState: {errors}
	 } = useForm<Inputs>();

	const onSubmit: SubmitHandler<Inputs> = () => {
		setFormSent(true)
		setTimeout(() => {
			setFormSent(false)
		}, 5000)
	};

return (
		<>
			{
				formSent && (
					<div className='success-check'>
						<div>
							<b><svg xmlns="http://www.w3.org/2000/svg" 
								width="20" 
								height="21" 
								fill="none" 
								viewBox="0 0 20 21">
									<path fill="#fff" d="M14.28 7.72a.748.748 0 0 1 0 1.06l-5.25 5.25a.748.748 0 0 1-1.06 0l-2.25-2.25a.75.75 0 1 1 1.06-1.06l1.72 1.72 4.72-4.72a.75.75 0 0 1 1.06 0Zm5.47 2.78A9.75 9.75 0 1 1 10 .75a9.76 9.76 0 0 1 9.75 9.75Zm-1.5 0A8.25 8.25 0 1 0 10 18.75a8.26 8.26 0 0 0 8.25-8.25Z"/>
							</svg>Message Sent</b>
							<p>Thank you for completing the form. We'll be in touch soon!</p>
						</div>
				</div>)
			}

			<form onSubmit={handleSubmit(onSubmit)}>
				<h1>Contact Us</h1>
				<p className='sub-heading'>
					Required fields are followed by
					<strong>
						<span aria-label="required">*</span>
					</strong>
				</p>
				<div className="contact-container">
					<div className="contact-info">
						<p className="field">
							<label htmlFor="firstname">First Name
								<span aria-label="required">
								*
							</span>
							</label>
							<input
								{...register("firstname", {required: 'This field is required'})}
								type="text"
								id="firstname"
								className={errors.firstname && 'input-errors'}
							/>
							{
								errors.firstname ?
								<p className='text-errors'> {errors.firstname?.message}</p> :
								null
							}
						</p>
			
						<p className="field">
							<label htmlFor="lastname">Last Name
								<span aria-label="required">*
								</span>
							</label>
							<input
								{...register("lastname", {required: 'This field is required'})}
								type="text"
								id="lastname"
								className={errors.lastname && 'input-errors'}
							/>
							{
								errors.lastname ?
								<p className='text-errors'>{errors.lastname?.message}</p> :
								null
							}
						</p>
						<p className="field">
							<label htmlFor="email">Email Address
								<span aria-label="required">*
								</span>
							</label>
							<input
								{...register("email", {
									required: 'This field is required',
									pattern: {
										value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
										message: "Please enter a valid email address"
									}
								})}
								type='email'
								id="email"
								className={errors.email && 'input-errors'}
							/>
							{
								errors.email ?
								<p className='text-errors'>{errors.email?.message}</p> :
								null
							}
						</p>
					</div>
				</div>
				<div className="query">
					<p className='query-type-heading'>Query Type
						<span aria-label="required">*</span>
					</p>
						<div className="query-type">
							<label htmlFor="option_1">
								<input
									type="radio"
									id="option_1"
									{...register("query", {required: 'Please select a query type'})}
									value='general enquiry'
								/>
								General Enquiry
							</label>
								<label htmlFor="option_2">
									<input
										type="radio"
										id="option_2"
										value='support request'
										{...register("query", {required: 'Please select a query type'})}
									/>
									Support Request
							</label>
						</div>
						{errors.query ? <p className="text-errors">{errors.query?.message}</p> : null}
			
					<p className='query-type-message'>
						<label htmlFor="message">
							Message
							<span aria-label="required">*</span>
						</label>
						<textarea
							id="message"
							cols={40}
							rows={10}
							{...register("message", {required: 'This field is required' })}
							className={errors.message && 'input-errors'}
						>
						</textarea>
						{
							errors.message ?
							<p className='text-errors'>{errors.message?.message}</p> :
							null
						}
					</p>
				</div>
				<div className='consent'>
						<label htmlFor="consent">
							<input
								type="checkbox"
								{...register("consent", {required: 'To submit this form, please consent to being contacted'})}
								id="consent"
							/>
							I consent to being contacted by the team
							<span aria-label="required">*</span>
						</label>
					{
							errors.consent ?
							<p
								className='text-errors'
								style={{marginBlockStart: '16px'}}>
									{errors.consent?.message}
							</p> :
							null
						}
				</div>
				<button type="submit"><span>submit</span></button>
			</form>
		</>
		)
}