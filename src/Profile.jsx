const Profile = (props) => {
    console.log(props);

    return (
        <div>
            <h3>Your Profile is registered with:</h3>
            <h4>{props.email} email address</h4>
        </div>
    );
};

export default Profile;
