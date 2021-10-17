import React from 'react'


class CompanyInfo extends React.Component {
    render() {
        return (
            <div>
                <div className="sec_title">
                    <h2>LEGAL INFORMATIONS</h2>
                </div>
           
                <table>
                    <tr>
                        <th>Nature</th>
                        <th>Creation date</th>
                        <th>Legal status</th>
                        <th>Activities</th>
                        <th>Capital</th>
                        <th>Effective</th>
                    </tr>
                    <tr>
                        <td>{this.props.currentCompany['juridicInfos_nature']?this.props.currentCompany['juridicInfos_nature']:"not available"}</td>
                        <td>{this.props.currentCompany['juridicInfos_creationYear']?this.props.currentCompany['juridicInfos_creationYear']:"not available"}</td>
                        <td>{this.props.currentCompany['juridicInfos_juridicForm']?this.props.currentCompany['juridicInfos_juridicForm']:"not available"}</td>
                        <td>{this.props.currentCompany['juridicInfos_activity']?this.props.currentCompany['juridicInfos_activity']:"not available"}</td>
                        <td>{this.props.currentCompany['juridicInfos_capital']?this.props.currentCompany['juridicInfos_capital']:"not available"}</td>
                        <td>{this.props.currentCompany['juridicInfos_effectif']?this.props.currentCompany['juridicInfos_effectif']:"not available"}</td>
                    </tr>
                </table>
            </div>  
        )
    }
}

export default CompanyInfo