import Input from "../Input";
import Button from "../Button";

const EditUser = ({ userData, editUserSubmit, handleChange }) => {
  return (
    <tr>
      <td>
        <Input onChange={handleChange} value={userData.avatar} id="avatar" label="Avatar Link" />
      </td>
      <td>
        <Input onChange={handleChange} value={userData.email} id="email" label="Email" />
      </td>
      <td>
        <Input onChange={handleChange} value={userData.username} id="username" label="Username" />
      </td>
      <td>
        <Input onChange={handleChange} value={userData.password} id="password" label="Password" />
      </td>
      <td>{userData.id}</td>
      <td className="action">
        <Button onClick={() => editUserSubmit()} className="editsubmit-button">
          Submit changes
        </Button>
      </td>
    </tr>
  );
};
export default EditUser;
