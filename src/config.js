import {config} from 'dotenv'
config();

//modifica para que funcione en el servidor 10.10.10.70:3000
export default
{
    port: process.env.PORT || 4000
}