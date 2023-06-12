import React from "react";
import "./UserCard.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function UserCard({ userInfo }) {
  const user = useSelector((state) => state.user);
  const params = useParams();

  return (
    userInfo && (
      <section>
        <div className="container p-0">
          <div
            className="userBackground"
            style={{ width: "100%", height: "150px", backgroundColor: "var(--color-principal)" }}
          ></div>
          <div className="container pt-3 border border-top-0" style={{ position: "relative" }}>
            <div id="divImageProfile">
              <img
                id="imageProfile"
                src={
                  userInfo.image.includes("https")
                    ? userInfo.image
                    : `${import.meta.env.VITE_IMAGE_CLOUD_DIRECTION}/${userInfo.image}`
                }
              />
            </div>
            <div className="d-flex justify-content-between">
              <span
                id="avatar"
                style={{ width: "150px", borderRadius: "50%", borderColor: "white", border: "5px" }}
              ></span>
              {user.id !== params.id &&
                (user.following.includes(params.id) ? (
                  <form method="post">
                    <button
                      type="submit"
                      className="btn btn-login rounded-pill p-1"
                      style={{
                        width: "90px",
                        color: "black",
                        borderColor: "rgb(196, 196, 196)",
                        backgroundColor: "rgb(255, 255, 255)",
                      }}
                    >
                      Following
                    </button>
                  </form>
                ) : (
                  <form method="post">
                    <button
                      type="submit"
                      className="btn btn-login rounded-pill p-1"
                      style={{ width: "90px" }}
                    >
                      Follow
                    </button>
                  </form>
                ))}
            </div>
            <div className="d-flex justify-content-between" id="userInfo">
              <div id="username" className="mt-5">
                <h2 className="m-0 fs-4">
                  {userInfo.firstname} {userInfo.lastname}
                </h2>
                <h3 className="small">@{userInfo.username}</h3>
              </div>
              <div className="align-self-end" id="userFollowing">
                <span className="fw-semibold">{userInfo.following.length} </span>
                <span className="small me-3">
                  <NavLink
                    to={`/profile/${userInfo.id}/following`}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Following
                  </NavLink>
                </span>{" "}
                <span className="fw-semibold">{userInfo.followers.length} </span>
                <span className="small">
                  <NavLink
                    to={`/profile/${userInfo.id}/followers`}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Followers
                  </NavLink>
                </span>
              </div>
            </div>
            <div className="mt-3">
              <p
                className="fw-semibold"
                style={{
                  textDecorationLine: "underline",
                  textDecorationThickness: "3px",
                  textUnderlineOffset: "12px",
                  textDecorationColor: "var(--color-principal)",
                  marginBottom: "9px",
                }}
              >
                Tweets
              </p>
            </div>
          </div>
        </div>
      </section>
    )
  );
}

export default UserCard;
