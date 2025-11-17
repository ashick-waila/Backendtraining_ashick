import { fetchEmployeeListService } from "../service/userservice.js";

export const fetchemployeelist = async (req, res) => {
  try {
    const { id } = req.query;   
    console.log(id , "hhddjd")
        console.log(req , "reqreqreq")


    const data = await fetchEmployeeListService(id);
    console.log(data , "datadatadata")

    res.status(200).json({
      message: "Employee fetched successfully",
      time: new Date().toISOString(),
      data,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
};