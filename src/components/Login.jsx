
import {useForm} from "react-hook-form"
import Input from "./Input"

function Login() {
   
    const {register, formState, handleSubmit} = useForm({
        mode: 'onChange'
    })

    const onSubmit = (data) => console.log(data)


    const {errors} = formState

  return (
    <div
    className='flex items-center justify-center w-full'
    >
        <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
        <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                    </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">Sign in to your account</h2>
        <form onSubmit={handleSubmit(onSubmit)} className='mt-8' noValidate>
            <div className='space-y-5'>
                <Input
                label="Email: "
                placeholder="Enter your email"
                type="email"
                errors={errors}
                registerName="email"
                {...register("email", {
                    required: true,
                    validate: {
                        matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                        "Email address must be a valid address",
                    }
                })}
                />
                <Input
                label="Password: "
                type="password"
                placeholder="Enter your password"
                errors={errors}
                registerName="password"
                {...register("password", {
                    required: true,
                })}
                />
                <button
                type="submit"
                className="w-full rounded-sm border border-gray-500 bg-amber-500 py-2"
                >Sign in</button>
            </div>
        </form>
        </div>
    </div>
  )
}

export default Login