export default function handler(req, res) {
  res.status(200).json([
    {
      id: 1,
      image_url:
        "https://scontent.fcgh68-1.fna.fbcdn.net/v/t39.30808-6/472994784_594825706615145_3409481156405456278_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=13d280&_nc_ohc=DC89w9A62rIQ7kNvwHTfVke&_nc_oc=AdoohcKnSEbLu7tlyeDbVJZx7S1EqZcscaKX-3bFLcWtloBXQjiFk29EllkjBXGDhh7O8XFAfy0Z3gmmJHKdV8D1&_nc_zt=23&_nc_ht=scontent.fcgh68-1.fna&_nc_gid=V48GQ0IhQN44MUxly_JPHA&_nc_ss=7a30f&oh=00_Afw5t84kJ80bBSf1wEWRmngfZD6Z-hv_jk_IDnVTOCu8aQ&oe=69C9F4E6",
      description: "Tattoo teste",
    },
  ]);
}
