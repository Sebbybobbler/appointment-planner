import React from "react";

export const ContactForm = ({
    name,
    setName,
    phone,
    setPhone,
    email,
    setEmail,
    handleSubmit,
}) => {
    const handleChange = (e) => {
        if (e.target.id === "name") {
            setName(e.target.value);
        }
        if (e.target.id === "phone") {
            setPhone(e.target.value);
        }
        if (e.target.id === "email") {
            setEmail(e.target.value);
        }
    };
    return (
        <>
            <form onsubmit={handleSubmit}>
                <label for="name">Name</label>
                <input
                    value={name}
                    id="name"
                    type="text"
                    onChange={handleChange}
                />
                <label for="phone">Phone</label>
                <input
                    value={phone}
                    id="phone"
                    type="tel"
                    onChange={handleChange}
                />
                <label for="email">Email</label>
                <input
                    value={email}
                    id="email"
                    type="email"
                    onChange={handleChange}
                />
                <button id="submit" type="submit">
                    Submit
                </button>
            </form>
        </>
    );
};
