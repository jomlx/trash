import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { Link } from "react-router-dom"
import Password from "./ui/password"

function Login() {
  return(
    <form action="" className="w-full flex justify-center mt-32">
        <div className="w-[400px] h-full min-h-[360px] p-6 shadow-md">

            <div className="flex justify-between items-center">
              <h1 className="text-3xl font-bold">Login</h1>
              <Link to='/register'>
                <p className="text-sm font-semibold underline text-gray-shade hover:text-black">Register</p>
              </Link>
            </div>

            <div className="text-xs font-semibold mt-2">
              <p>Login with your account.</p>
            </div>

            <div className="mt-10">
              <Input placeholder='Email or Username'></Input>
            </div>

            <div className="my-2">
              <Password></Password>
            </div>

            <div className="text-xs font-semibold text-primary-color">
              <p>Forget Password</p>
            </div>

            <div className="mt-10">
              <Link to='/'>
                <Button className='w-full bg-primary-color hover:bg-primary-shade'>Login</Button>
              </Link>
            </div>

        </div>
    </form>
  )
}

export default Login