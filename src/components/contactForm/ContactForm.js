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
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input
                    value={name}
                    id="name"
                    type="text"
                    onChange={(e) => {
                        setName(e.target.value);
                    }}
                />
                <label htmlFor="phone">Phone</label>
                <input
                    value={phone}
                    id="phone"
                    type="tel"
                    onChange={(e) => {
                        setPhone(e.target.value);
                    }}
                />
                <label htmlFor="email">Email</label>
                <input
                    value={email}
                    id="email"
                    type="email"
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                />
                <button type="submit">Submit</button>
            </form>
        </>
    );
};
