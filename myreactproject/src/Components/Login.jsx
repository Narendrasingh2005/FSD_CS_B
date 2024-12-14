import React from "react";
import { useState } from "react";


const Login = ({regdata}) =>
{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    function validate(e) {
        e.praventDefault();
        if (regdata.email == email && regdata.password == password) {
            alert("Login Successfully");
        }
        else{
            alert("Login Failed");
        }
    }
}