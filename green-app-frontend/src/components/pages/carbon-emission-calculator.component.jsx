import React, { Component } from 'react';
import axios from 'axios';

export default class CreateTodo extends Component {

		constuctor() {
			this.state = {
				activity: '',
				activityType: '',
				country: '',
				mode: '',
			};
		}
		changeHandler = (event) => {
			this.setState({
				activity: event.target.value,
				activityType: event.target.value,
				country: event.target.value,
				mode: event.target.value,
			});
		}
		handleSubmit(event) {
			//just creating this cancer here to test and idk how react is supposed to structure
			//https://www.notion.so/Trip-to-Carbon-API-REFERENCE-a68cfb4e0dcc41f9826cba1f3e4af5ac
			// need to construct the payload(?)
			axios.get('https://api.triptocarbon.xyz/v1/footprint?activity=100&activityType=miles&country=usa&mode=taxi')
				.then(res => {
					console.log(res);
					const carbonFootprint = res.data;
					alert('Your carbon footprint is estimated to be: ' + carbonFootprint);
				})
				.catch(
					function (error) {
						alert(error);
				});




		}
    render() {
        return (
					<div>
						<div>Carbon Emission Calculator</div>

						<form onSubmit={this.handleSubmit}>
							<label>
								Activity:
								<input
									type="text"
									name="activity"
									onChange={this.changeHandler} />
							</label>
							<br />
							<label>
								Activity Type:
								<input
									type="text"
									name="activityType"
									onChange={this.changeHandler} />
							</label>
							<br />
							<label>
								Country:
								<input
									type="text"
									name="country"
									onChange={this.changeHandler} />
							</label>
							<br />
							<label>
								Mode:
								<input
									type="text"
									name="Mode"
									onChange={this.changeHandler} />
							</label>
							<br />
							<input
								type="submit"
								value="Submit"
							/>
						</form>

					</div>
					//TODO: Carbon Emission Calculator

        )
    }
}