import { useForm, type SubmitHandler } from 'react-hook-form';
import '../styles/form.sass';

type Inputs = {
	firstname: string;
	lastname: string;
	email: string;
	query: string;
	message: string;
	consent: boolean;
}

export default function ContactForm() {
	const {
		register,
		handleSubmit,
		formState: {errors}
	 } = useForm<Inputs>();

	const onSubmit: SubmitHandler<Inputs> = (data) => {
		console.log(data)
	};

return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<h1>Contact Us</h1>
			<p className='sub-heading'>
				Required fields are followed by
				<strong>
					<span aria-label="required">*</span>
				</strong>
			</p>

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

			<div className="query">
				<p className='query-type-heading'>Query Type 
					<span aria-label="required">*</span>
				</p>
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
						<p className='text-errors'>{errors.consent?.message}</p> : 
						null
					}
			</div>
			<button type="submit">submit</button>
		</form>
		)
}