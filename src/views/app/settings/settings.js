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
          Settings
        </h3>
        <Separator className="mb-5" />
        <div className="flexColl">
          <Card className="mb-4 mr-4">
            <CardBody>
              <h4>Bank details</h4>
              <p className="text-muted text-small mb-2">Date of birth</p>
              <p className="mb-3">01.25.1980</p>
              <p className="text-muted text-small mb-2">Address</p>
              <p className="mb-3">61 Iolaire Road</p>
              <p className="text-muted text-small mb-2">Postal Code</p>
              <p className="mb-3">ML11 5TL</p>
              <p className="text-muted text-small mb-2">City</p>
              <p className="mb-3">NEW MAINS</p>
              {/* <p className="text-muted text-small mb-2">State</p>
                <p className="mb-3"></p> */}
              <p className="text-muted text-small mb-2">Last 4 SSN</p>
              <p className="mb-3">000-00-000</p>
              <p className="text-muted text-small mb-2">Photo ID(picture)</p>
              <p className="mb-3">/</p>
              <p className="text-muted text-small mb-2">Bank Name</p>
              <p className="mb-3">The Bank of England</p>
              <p className="text-muted text-small mb-2">Bank Account Number</p>
              <p className="mb-3">0000 0000 0000 0000</p>
              <p className="text-muted text-small mb-2">Bank Routing Number</p>
              <p className="mb-3">000000000000</p>
              <button className="positive">Edit Bank info</button>
            </CardBody>
          </Card>

          <Card className="mb-4">
            <CardBody>
              <h4>Support</h4>

              <p className="text-muted text-small mb-2">Email Support</p>
              <p className="mb-3">admin@admin.com</p>
              <p className="text-muted text-small mb-2">Phone Support</p>
              <p className="mb-3">+44 6545687 </p>
            </CardBody>
          </Card>
        </div>
        <div className="flexColl">
          <Card className="mb-4 mr-4">
            <CardBody>
              <h4>Privacy Policy</h4>
              <p className="mb-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
                <br /> Duis aute irure dolor in reprehenderit in voluptate velit
                esse cillum dolore eu fugiat nulla pariatur. <br />
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum. Sed ut
                perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt.
                <br /> Neque porro quisquam est, qui dolorem ipsum quia dolor
                sit amet, consectetur, adipisci velit, sed quia non numquam eius
                modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                voluptatem.
                <br /> Ut enim ad minima veniam, quis nostrum exercitationem
                ullam corporis suscipit laboriosam, nisi ut aliquid ex ea
                commodi consequatur? Quis autem vel eum iure reprehenderit qui
                in ea voluptate velit esse quam nihil molestiae consequatur, vel
                illum qui dolorem eum fugiat quo voluptas nulla pariatur
              </p>
            </CardBody>
          </Card>

          <Card className="mb-4">
            <CardBody>
              <h4>Terms and Conditions</h4>
              <p className="mb-3">
                But I must explain to you how all this mistaken idea of
                denouncing pleasure and praising pain was born and I will give
                you a complete account of the system, and expound the actual
                teachings of the great explorer of the truth, the master-builder
                of human happiness. <br />
                No one rejects, dislikes, or avoids pleasure itself, because it
                is pleasure, but because those who do not know how to pursue
                pleasure rationally encounter consequences that are extremely
                painful. Nor again is there anyone who loves or pursues or
                desires to obtain pain of itself, because it is pain, but
                because occasionally circumstances occur in which toil and pain
                can procure him some great pleasure. To take a trivial example,
                which of us ever undertakes laborious physical exercise, except
                to obtain some advantage from it? <br /> But who has any right
                to find fault with a man who chooses to enjoy a pleasure that
                has no annoying consequences, or one who avoids a pain that
                produces no resultant pleasure? At vero eos et accusamus et
                iusto odio dignissimos ducimus qui blanditiis praesentium
                voluptatum deleniti atque corrupti quos dolores et quas
                molestias excepturi sint occaecati cupiditate non provident,
                similique sunt in culpa qui officia deserunt mollitia animi, id
                est laborum et dolorum fuga. <br />
                Et harum quidem rerum facilis est et expedita distinctio. Nam
                libero tempore, cum soluta nobis est eligendi optio cumque nihil
                impedit quo minus id quod maxime placeat facere possimus, omnis
                voluptas assumenda est, omnis dolor repellendus. Temporibus
                autem quibusdam et aut officiis debitis aut rerum necessitatibus
                saepe eveniet ut et voluptates repudiandae sint et molestiae non
                recusandae. Itaque earum rerum hic tenetur a sapiente delectus,
                ut aut reiciendis voluptatibus maiores alias consequatur aut
                perferendis doloribus asperiores repellat.
              </p>
            </CardBody>
          </Card>
        </div>
      </Colxx>
    </Row>
  </>
);
export default Profile;
