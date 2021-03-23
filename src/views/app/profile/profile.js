import React from 'react';
import IntlMessages from '../../../helpers/IntlMessages';
import { Colxx, Separator } from '../../../components/common/CustomBootstrap';
import UserCardComp from '../../../components/cards/UserCardComp';
import {
  Row,
  Card,
  CardBody,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
  TabContent,
  TabPane,
  Badge,
  CardTitle,
  Button,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import SingleLightbox from '../../../components/pages/SingleLightbox';
import GalleryDetail from '../../../containers/pages/GalleryDetail';
import GalleryProfile from '../../../containers/pages/GalleryProfile';

const Profile = ({ match }) => (
  <>
    {/* <Row>
      <Colxx xxs="12">
        <Breadcrumb heading="menu.second" match={match} />
        <Separator className="mb-5" />
      </Colxx>
    </Row> */}
    <Row>
      <Colxx xxs="12" className="col-left">
        <h3>
          {/* <IntlMessages id="menu.dashboard" /> */}
          Profile
        </h3>
        <Separator className="mb-5" />
        <div className="flexColl">
          <Card className="mb-4 mr-4">
            <div className="position-absolute card-top-buttons">
              <Button outline color="white" className="icon-button">
                <i className="simple-icon-pencil" />
              </Button>
            </div>
            <SingleLightbox
              thumb="/assets/img/doctorFemale.jpg"
              large="/assets/img/doctorFemale.jpg"
              className="card-img-top"
            />

            <CardBody>
              <p className="text-muted text-small mb-2">Bio</p>
              <p className="mb-3">
                Dr. Lina Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries, but also
                the leap into electronic typesetting, remaining essentially
                unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more
                recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum. It has survived not only five
                centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged. It was popularised in the 1960s
                with the release of Letraset sheets containing Lorem Ipsum
                passages, and more recently with desktop publishing software
                like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
              <div className="flexColl">
                <div>
                  <p className="text-muted text-small mb-2">Full name</p>
                  <p className="mb-3">Dr. Yasmin Karsan</p>
                  <p className="text-muted text-small mb-2">Category</p>
                  <p className="mb-3">
                    <Badge color="outline-secondary" className="mb-1 mr-1" pill>
                      Pharmacist
                    </Badge>
                  </p>
                  <p className="text-muted text-small mb-2">Date of Birth</p>
                  <p className="mb-3">01.01.1991</p>
                  <p className="text-muted text-small mb-2">Email</p>
                  <p className="mb-3">lina@gmail.com</p>
                  <p className="text-muted text-small mb-2">Phone</p>
                  <p className="mb-3">+44 123 123 123</p>
                  <h4>Registered Body</h4>
                  <p className="text-muted text-small mb-2">Name</p>
                  <p className="mb-3">General Pharmaceutical Council </p>
                  <p className="text-muted text-small mb-2">Number</p>
                  <p className="mb-3">2080112{}</p>
                  <p className="text-muted text-small mb-2">Renewal date</p>
                  <p className="mb-3">01.01.2012{}</p>
                  <h4>Courses undertaken. (if yes)</h4>
                  <p className="text-muted text-small mb-2">Name of course</p>
                  <p className="mb-3">Course</p>
                  <p className="text-muted text-small mb-2">Institution</p>
                  <p className="mb-3">Institution</p>
                  <p className="text-muted text-small mb-2">Date completed</p>
                  <p className="mb-3">01.01.2010{}</p>
                  {/* <h4>Right to work in the UK</h4> */}

                  <h4>Indemnity Insurance</h4>
                  <p className="text-muted text-small mb-2">Company</p>
                  <p className="mb-3">Company</p>
                  <p className="text-muted text-small mb-2">Renewal date</p>
                  <p className="mb-3">01.01.2010{}</p>
                </div>
                <div>
                  <p className="text-muted text-small mb-2">
                    Appointment Rating
                  </p>
                  <p className="mb-3">65 GBP/hour</p>
                  <p className="text-muted text-small mb-2">
                    Video conference Rating
                  </p>
                  <p className="mb-3">50 GBP/hour</p>
                  <p className="text-muted text-small mb-2">Base practice</p>
                  <p className="mb-3">Pharmacist</p>
                  <p className="text-muted text-small mb-2">Language spoken</p>
                  <p className="mb-3">English</p>
                </div>
              </div>
              <p className="text-muted text-small mb-2">Location</p>
              <p className="mb-3">Nottingham, UK</p>
            </CardBody>
          </Card>

          <Card className="mb-4">
            <CardBody>
              {/* <CardTitle></CardTitle> */}
              <p className="text-muted text-small mb-2">Drivers licence</p>
              <SingleLightbox
                thumb="/assets/img/drivers.jpg"
                large="/assets/img/drivers.jpg"
                className="card-img-top mb-2"
              />
              <p className="text-muted text-small mb-2">
                Diploma's and certificate's
              </p>
              <GalleryDetail />
            </CardBody>
          </Card>
        </div>
      </Colxx>
    </Row>
  </>
);
export default Profile;
