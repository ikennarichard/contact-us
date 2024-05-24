```js
// adding default values to react hook
const {
		register,
		handleSubmit,
		formState: {errors}
	 } = useForm<Inputs>({
		defaultValues: {
			// supply default values
		}
	 });

```