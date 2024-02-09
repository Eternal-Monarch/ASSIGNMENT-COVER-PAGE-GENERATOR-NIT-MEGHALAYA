document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('coverForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const getElementValue = (id) => {
            const element = document.getElementById(id);
            return element ? element.value : '';
        };

        const assignmentNo = getElementValue('assignmentNo');
        const studentName = getElementValue('studentName');
        const rollNumber = getElementValue('rollNumber');
        const programme = getElementValue('programme');
        const department = getElementValue('department');
        const semester = getElementValue('semester');
        const courseName = getElementValue('courseName');
        const courseCode = getElementValue('courseCode');

        const pdfContent = `
            <div style="border: 2px solid black; padding: 20px;">
                <h1 style="font-family: Arial, sans-serif; font-size: 45px; text-align: center; margin-top: 40px;">National Institute of Technology Meghalaya</h1>
                <div style="text-align: center;">

                    <img src="university_logo.png" alt="University Logo" style="width: 300px;text-align: center; margin-top: 15px">
                </div>
                <p style="font-size: 31px; font-family: Calibri, sans-serif; margin-top: 33px; text-align: center; font-weight: bold; padding-left: 20px;"><u>Assignment No:</u> ${assignmentNo}</p>

                <p style="font-size: 30px; font-family: Calibri, sans-serif; margin-top: 33px; text-align: left; font-weight: bold; padding-left: 20px;"><b> Student Name:</b> <span style="font-weight: normal;">${studentName}</span></p>
                <p style="font-size: 30px; font-family: Calibri, sans-serif; margin-top: 32px; text-align: left; font-weight: bold; padding-left: 20px;"><b> Roll Number: </b> <span style="font-weight: normal;">${rollNumber}</span></p>
                <p style="font-size: 30px; font-family: Calibri, sans-serif; margin-top: 35px; text-align: left; font-weight: bold; padding-left: 20px;"><b> Programme: </b> <span style="font-weight: normal;">${programme}</span></p>
                <p style="font-size: 30px; font-family: Calibri, sans-serif; margin-top: 38px; text-align: left; font-weight: bold; padding-left: 20px;"><b> Department:</b>  <span style="font-weight: normal;">${department}</span></p>
                <p style="font-size: 30px; font-family: Calibri, sans-serif; margin-top: 40px; text-align: left; font-weight: bold; padding-left: 20px;"><b> Semester:</b>  <span style="font-weight: normal;">${semester}</span></p>
                <p style="font-size: 30px; font-family: Calibri, sans-serif; margin-top: 42px; text-align: left; font-weight: bold; padding-left: 20px;"><b> Course Name:</b>  <span style="font-weight: normal;">${courseName}</span></p>
                <p style="font-size: 30px; font-family: Calibri, sans-serif; margin-top: 44px; text-align: left; font-weight: bold; padding-left: 20px;"><b> Course Code: </b> <span style="font-weight: normal;">${courseCode}</span></p>
                
            </div>
        `;

        const win = window.open('', '_blank');
        win.document.write('<html><head><title>Assignment Cover Page</title></head><body>');
        win.document.write(pdfContent);
        win.document.write('</body></html>');
        win.document.close();
        win.print();
    });
});
